from django.shortcuts import render, reverse
from .models import ChatBot
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, JsonResponse
import google.generativeai as genai
from google.generativeai.types.generation_types import StopCandidateException
from dotenv import load_dotenv
load_dotenv()
import os

# Create your views here.
# add here to your generated API key
genai.configure(api_key='')

generation_config = {
  "temperature": 0.9,
  "top_p": 1,
  "top_k": 0,
  "max_output_tokens": 2048,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_NONE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_NONE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_NONE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_NONE"
  },
]
@login_required
def ask_question(request):
    if request.method == "POST":
        text = request.POST.get("text")
        try:
            model = genai.GenerativeModel(model_name="gemini-1.0-pro",generation_config=generation_config,safety_settings=safety_settings)
            chat = model.start_chat(history=[{
                      "role": "user",
                      "parts": ["You are a helpful telecomunication farming assistant named KrishiCare who only responds with queries related to Agriculture and farming. For other queries you will only say that you do not specialise in that domain and therefore do not know the answer of. Respond only with few words and do not explain what you say."]
                    },{
                      "role": "model",
                      "parts": ["Okay, I'm KrishiCare, your AI farming friend. Ask away!"]},])
            response = chat.send_message(text)
            user=request.user
            ChatBot.objects.create(text_input=text, gemini_output=response.text, user=user)
            # Extract necessary data from response
            response_data = {
                "text": response.text,  # Assuming response.text contains the relevant response data
                # Add other relevant data from response if needed
            }
            return JsonResponse({"data": response_data})
        except StopCandidateException as e:
            print(f"StopCandidateException raised: {e}")
            return JsonResponse({"error": "An error occurred while processing your request."}, status=500)

    else:
        return HttpResponseRedirect(
            reverse("chat")
        ) 
@login_required
def chat(request):
    user=request.user
    print(f'\n\n',user,f'\n\n',type(user),f'\n\n')
    chats = ChatBot.objects.filter(user=user)
    return render(request, "chat.html", {"chats": chats})