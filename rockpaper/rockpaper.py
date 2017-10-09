from flask import Flask, render_template, request, redirect, session

import random

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


def get_computer_move():
    options = ["rock", "paper", "scissors"]
    return options[random.randint(0,2)]

def get_winner(player_choice, computer_choice):
    winner = "computer"
    if player_choice == computer_choice:
        winner = "tie"
    if player_choice == "rock" and computer_choice == "scissors":
        winner = "player"
    if player_choice == "scissors" and computer_choice == "paper":
        winner = "player"
    if player_choice == "paper" and computer_choice == "rock":
        winner = "player"
    return winner

def winlossdraw(winner):

    if winner == "player":
        wincount += 1
    if winner == "computer":
        losscount += 1
    if winner == "tie":
        drawcount +=1
    return wincount,losscount,drawcount

@app.route('/')
def index():
    session['wincount']=wincount
    session['losscount']=losscount
    session['drawcount']=drawcount
    _title = "ROCK PAPER SCISSORS"
    _content = "Pick one!"
    _rock = "/rock"
    _paper = "/paper"
    _scissors = "/scissors"
    _link1content = "ROCK"
    _link2content = "PAPER"
    _link3content = "SCISSORS"
    return render_template('index.html', title=_title, content=_content, rock=_rock, paper=_paper, scissors= _scissors, link1_content=_link1content, link2_content=_link2content, link3_content= _link3content, )


@app.route('/rock')
def rock():
    session['wincount']=wincount
    session['losscount']=losscount
    session['drawcount']=drawcount
    player_choice = 'rock'
    computer_choice = get_computer_move()
    winner = get_winner(player_choice, computer_choice)
    print winner
    _title = computer_choice
    _content = "You picked rock. The Winner is...." + winner + ". Wins: " + session['wincount'] +'. draws: ' + session['drawcount']+ ". losses: " + session['losscount']
    _rock = "/rock"
    _paper = "/paper"
    _scissors = "/scissors"
    _link1content = "ROCK"
    _link2content = "PAPER"
    _link3content = "SCISSORS"
    return render_template('index.html',session, title=_title, content=_content, rock=_rock, paper=_paper, scissors= _scissors, link1_content=_link1content, link2_content=_link2content, link3_content= _link3content,)


@app.route('/paper')
def paper():
    session['wincount']=wincount
    session['losscount']=losscount
    session['drawcount']=drawcount
    player_choice = 'paper'
    computer_choice = get_computer_move()
    winner = get_winner(player_choice, computer_choice)
    print winner
    _title = computer_choice
    _content = "You picked paper. The Winner is...." + winner + ". Wins: " +session['wincount'] +'. draws: ' + session['drawcount']+ ". losses: " + session['losscount']
    _rock = "/rock"
    _paper = "/paper"
    _scissors = "/scissors"
    _link1content = "ROCK"
    _link2content = "PAPER"
    _link3content = "SCISSORS"
    return render_template('index.html',session, title=_title, content=_content, rock=_rock, paper=_paper, scissors= _scissors, link1_content=_link1content, link2_content=_link2content, link3_content= _link3content)

@app.route('/scissors')
def scissors():
    session['wincount']=wincount
    session['losscount']=losscount
    session['drawcount']=drawcount
    player_choice = 'scissors'
    computer_choice = get_computer_move()
    winner = get_winner(player_choice, computer_choice)
    print winner
    _title = computer_choice
    _content = "You picked scissors. The Winner is...." + winner + ". Wins: " +session['wincount'] +'. draws: ' + session['drawcount']+ ". losses: " + session['losscount']
    _rock = "/rock"
    _paper = "/paper"
    _scissors = "/scissors"
    _link1content = "ROCK"
    _link2content = "PAPER"
    _link3content = "SCISSORS"
    return render_template('index.html',session, title=_title, content=_content, rock=_rock, paper=_paper, scissors= _scissors, link1_content=_link1content, link2_content=_link2content, link3_content= _link3content)
app.run(debug=True)
