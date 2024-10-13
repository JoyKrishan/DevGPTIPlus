import requests
def trimite_mesaj(api_key, chat_id, text_mesaj):
    url = f"https://api.telegram.org/bot6516972943:AAFPam-uBm411yXcfDbpZHrXj6hZ7eAgAjA/sendMessage"
    parametri = {
        'chat_id': chat_id,
        'text': text_mesaj
    }

    try:
        raspuns = requests.post(url, params=parametri)
        raspuns.raise_for_status()
        print("Mesaj trimis cu succes!")
    except Exception as e:
        print(f"Eroare la trimiterea mesajului: {e}")

# Setează cheia API și ID-ul de chat
api_key = "6516972943:AAFPam-uBm411yXcfDbpZHrXj6hZ7eAgAjA"
chat_id = "6914383555"  # Înlocuiește cu ID-ul de chat real

# Mesajul pe care dorești să-l trimiți
text_mesaj = "alerta! cineva incearca sa-ti deschida usa"

# Trimite mesajul
trimite_mesaj(api_key, chat_id, text_mesaj)