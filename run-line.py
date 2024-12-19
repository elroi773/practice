import time

def running_text(text):
    while True:
        print('\r'+text,end='')
        time.sleep(0.2)
        text = text[1:]+text[0]

running_text('Hello World! ')