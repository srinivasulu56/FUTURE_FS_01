from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def feedback_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            name = data.get('name', 'Anonymous')
            email = data.get('email', '')
            message = data.get('message', '')
            rating = data.get('rating', '')
            suggestion = data.get('suggestion', '')

            subject = f'New Portfolio Feedback from {name}'
            body = f"""
Name: {name}
Email: {email}
Rating: {rating} stars
Suggestion: {suggestion}

Message:
{message}
"""

            send_mail(
                subject,
                body,
                email,  # Sender
                ['srinivasulusachu2005@gmail.com'],  # Receiver (your email)
                fail_silently=False,
            )

            return JsonResponse({'status': 'success', 'message': 'Feedback sent successfully!'}, status=200)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)
