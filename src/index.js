import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent from './AppComponent';
import Parent from './family/parent';
import Alphabet from './alphabet/alphabet';
import Counter from './alphabet/counter/counter';
import LifeCycle from './lifecycle/lifecycle';
import RemoteAPIData from './remote/apiData';
import ParentForm from './forms/parentForm';

ReactDOM.render(<div>
                <AppComponent></AppComponent>
                <AppComponent></AppComponent>
                <hr></hr>
                <Parent nameson="Umesh" namedaughter="Uma">Shah</Parent>
                <hr></hr>
                <Parent nameson="Omkar" namedaughter="Omi">Mehta</Parent>
                <hr></hr>
                <Parent nameson="Priyam" namedaughter="Priya">Malhotra</Parent>
                <hr></hr>
                <Alphabet fcolor="red" bcolor="yellow">R</Alphabet>
                <Alphabet fcolor="yellow" bcolor="red">A</Alphabet>
                <Alphabet fcolor="green" bcolor="pink">I</Alphabet>
                <Alphabet fcolor="pink" bcolor="purple">N</Alphabet>
                <Alphabet fcolor="black" bcolor="white">B</Alphabet>
                <Alphabet fcolor="brown" bcolor="pink">O</Alphabet>
                <Alphabet fcolor="red" bcolor="yellow">W</Alphabet>
                <hr></hr>
                <Counter></Counter>
                <hr></hr>
               
                </div>,
                document.getElementById("root"))


ReactDOM.render(<LifeCycle></LifeCycle>, document.getElementById("life"))                

ReactDOM.render(<RemoteAPIData></RemoteAPIData>, document.getElementById('remote'))

ReactDOM.render(<ParentForm></ParentForm>, document.getElementById("form"))