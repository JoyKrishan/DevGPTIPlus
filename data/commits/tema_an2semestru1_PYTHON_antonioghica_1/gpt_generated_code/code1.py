import urequests as requests

def trimite_mesaj(api_key, chat_id, text_mesaj):
    url = "https://api.telegram.org/bot{}/sendMessage".format(api_key)
    parametri = {
        'chat_id': chat_id,
        'text': text_mesaj
    }

    try:
        raspuns = requests.post(url, params=parametri)
        raspuns.raise_for_status()
        print("Mesaj trimis cu succes!")
    except Exception as e:
        print("Eroare la trimiterea mesajului:", e)

# Setează cheia API și ID-ul de chat
api_key = "6516972943:AAFPam-uBm411yXcfDbpZHrXj6hZ7eAgAjA"
chat_id = "6914383555"  # Înlocuiește cu ID-ul de chat real

# Mesajul pe care dorești să-l trimiți
text_mesaj = "Alerta! Cineva încearcă să-ți deschidă ușa."

# Trimite mesajul
trimite_mesaj(api_key, chat_id, text_mesaj)