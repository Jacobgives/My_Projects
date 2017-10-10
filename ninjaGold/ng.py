from flask import Flask, render_template, redirect, session, request
import random, time
app = Flask(__name__)
app.secret_key = 'SupesSecret'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_money', methods=["POST"])
def process():
    gold = 0
    session[gold]=gold
    building=request.form['building']
    if building == 'farm':
        session['gold'] += random.randint(10,20)
    elif building=='cave':
        session['gold'] += random.randint(5,10)
    elif building=='house':
        session['gold'] +=random.randint(2,5)
    elif building=='casino':
        session['gold'] +=random.randint(0,50)
    return redirect('/')

app.run(debug=True)
