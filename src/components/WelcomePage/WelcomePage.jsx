import {useState} from 'react';
import '../App/App.css';
import QuestionPage from '../QuestionPage/QuestionPage';


var statement1 = "You are a believer in equal opportunity for all, supporting a progressive tax system where the wealtiest Americans pay a higher rate.";
var statement2 = "You are a supporter of robust social programs such as Medicare, Medicaid, and affordable health care access for all.";
var statement3 = "You are an advocate for the rights of racial minorities, women, and the LGBTQ+ community, supporting issues such as disability rights and women's reproductive freedom.";
var statement4 = "You are a believer in the effects of climate change and favor government intervention and investment in clean energy to reduce carbon emissions.";
var statement5 = "You believe in the general idea of government intervention in the lives of the people in order to help improve the wellbeing of the American nation and its people.";
var statement6 = "You are a supporter of limited governmental intervention on the federal level, instead believing in the abilities of state and local governments to support their citizens and their constitutional rights.";
var statement7 = "You believe in the idea of fiscal conservatism, favoring lower taxes and less oversight of corporations with an emphasis on free-market capitalism, believing that less oversight results in greater initiative of private citizens for solving economic issues.";
var statement8 = "You emphasize the sovereignty of the individual, believing in less government intervention via social safety nets and an emphasis on the self-reliance and personal responsibility of the individual.";
var statement9 = "You consider yourself more socially conservative, supporting traditional values such as those espoused in religious texts such as the Bible, and generally holding family-oriented beliefs.";
var statement10 = "You favor increased military spending and a strong national defense with the aim of protecting American security, believing in the need to act unilaterally if necessary.";

var quizList = [statement1, statement2, statement3, statement4, statement5, statement6, statement7, statement8, statement9, statement10];




function WelcomePage() {

    const [isClicked, setIsClicked] = useState(false);  // local state for handling the "clicked" status of the welcome page start button

    quizList.sort(() => Math.random() - 0.5);  // randomly sorts the quiz questions when the Welcome Page boots up

    const moveToQuestions = () => {


        setIsClicked(!isClicked);  // toggles the clicked status of the Welcome Page start button

        return (
            <QuestionPage quizQuestions={quizList}/>
        );
    }

    return (
        <div className="WelcomePage">
            <header className="App">
            <h1>Welcome!</h1>
                <h3>Are you a <h2 className="Republican-style">Republican</h2> or a <h2 className="Democrat-style">Democrat</h2><header className="App"><h1>? ? ?</h1></header> Or somewhere in between?  Click the button below to find out!</h3>
            </header>
            <button onClick={moveToQuestions}>Start the Quiz!</button>
        </div>
    );
}

export default WelcomePage;