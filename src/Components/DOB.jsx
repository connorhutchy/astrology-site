import React, { Component } from 'react'
import arrows from '../constellationArrow.png';
import constellation from '../constellations/empty_constellation.png';
import aquarius from '../constellations/aquarius.png';
import aries from '../constellations/aries.png';
import cancer from '../constellations/cancer.png';
import capricorn from '../constellations/capricorn.png';
import gemini from '../constellations/gemini.png';
import leo from '../constellations/leo.png';
import libra from '../constellations/libra.png';
import pisces from '../constellations/pisces.png';
import sagittarius from '../constellations/sagittarius.png';
import scorpio from '../constellations/scorpio.png';
import taurus from '../constellations/taurus.png';
import virgo from '../constellations/virgo.png';

export default class DOB extends Component {

    constructor(props){
        super(props);

        this.state = {starSign:'',
                      day:'',
                      month:'',
                      reading:"You're a bitch"};

        this.handleContinue = this.handleContinue.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getRandomStatement = this.getRandomStatement.bind(this);
    }


    handleBack(){

        var resultElement = document.getElementById("result");
        resultElement.className="result_fade";
        setTimeout(function(){resultElement.className="result_hidden"},2000);

        var dobElement = document.getElementById("dob");
        
        setTimeout(function(){dobElement.className = "dob"},2000);
        

    }

    handleContinue()
    {
      
        var dobElement = document.getElementById("dob");
        dobElement.className = "dob_clicked";
        setTimeout(function(){dobElement.className = "dob_hidden"},2000);

        var resultElement = document.getElementById("result");
        setTimeout(function(){resultElement.className="result_show"},2000);

        this.getRandomStatement();

    }

    handleChange(event) {

        this.setState({[event.target.name]: event.target.value});

        var ariesStart = new Date('March 21, 2020 01:00:00');
        var taurusStart = new Date('April 20, 2020 01:00:00');
        var geminiStart = new Date('May 21, 2020 01:00:00');
        var cancerStart = new Date('June 21, 2020 01:00:00');
        var leoStart = new Date('July 23, 2020 01:00:00');
        var virgoStart = new Date('August 23, 2020 01:00:00');
        var libraStart = new Date('September 23, 2020 01:00:00');
        var scorpioStart = new Date('October 23, 2020 01:00:00');
        var sagStart = new Date('November 21, 2020 01:00:00');
        var capricornStart = new Date('December 22, 2020 01:00:00');
        var aquariusStart = new Date('January 20, 2020 01:00:00');
        var piscesStart = new Date('February 19, 2020 01:00:00');


        if(event.target.value !== ""){
        if((event.target.name === "day" && this.state.month !== "") || (event.target.name === "month" && this.state.day !== "") ){

            /*
            *   if javascript date object returns month/day that does not match what was choosen - date is not a valid date
            */

            var date; 
            var months = ["January","February", "March", "April","May", "June", "July","August","September","October","November","December"];
            var dateString, resultingDate, isCorrectDate;

            if(event.target.name === "day"){

                dateString = this.state.month +" " + event.target.value;
                date = new Date(dateString + ", 2020 01:00:00");

                resultingDate = months[date.getMonth()] + " " + date.getDate();
                isCorrectDate = resultingDate === dateString;
            
            }
            else
            {
                dateString = event.target.value +" " + this.state.day;
                date = new Date(dateString + ", 2020 01:00:00");

                resultingDate = months[date.getMonth()] + " " + date.getDate();
                isCorrectDate = resultingDate === dateString;


            }

            console.log(isCorrectDate);
            if(isCorrectDate){

            

            var janFirst = new Date("January 1, 2020 01:00:00");

            if(date >= janFirst && date < aquariusStart){

                capricornStart = janFirst;

            }
       

            if(date >= ariesStart && date < taurusStart)
            {

                this.updateConstellation(aries);
                this.setState({starSign:"Aries"});

            }
            else if(date >= taurusStart && date < geminiStart){

                this.updateConstellation(taurus);
                this.setState({starSign:"Taurus"});

            }
            else if(date >= geminiStart && date < cancerStart)
            {
                this.updateConstellation(gemini);
                this.setState({starSign:"Gemini"});
            }
            else if(date >= cancerStart && date < leoStart){

                this.updateConstellation(cancer);
                this.setState({starSign:"Cancer"});
            }
            else if(date >= leoStart && date < virgoStart){
                
                this.updateConstellation(leo);
                this.setState({starSign:"Leo"});
            }
            else if(date >= virgoStart && date < libraStart){
                
                this.updateConstellation(virgo);
                this.setState({starSign:"Virgo"});
            }
            else if(date >= libraStart && date < scorpioStart){

                this.updateConstellation(libra);
                this.setState({starSign:"Libra"});
            }
            else if(date >= scorpioStart && date < sagStart){

                this.updateConstellation(scorpio);
                this.setState({starSign:"Scorpio"});
            }
            else if(date >= sagStart && date < capricornStart){
                
                this.updateConstellation(sagittarius);
                this.setState({starSign:"Sagittarius"});
            }
            else if(date >= capricornStart && date < (new Date("January 1, 2021 01:00:00"))){

                this.updateConstellation(capricorn);
                this.setState({starSign:"Capricorn"});
            }
            else if(date >= aquariusStart && date < piscesStart){
                
                this.updateConstellation(aquarius);
                this.setState({starSign:"Aquarius"});

            }
            else if(date >= piscesStart && date < ariesStart){

                this.updateConstellation(pisces);
                this.setState({starSign:"Pisces"});
            }
            else{

                this.updateConstellation(constellation);
                this.setState({starSign:""});
            }

        }
        else{
            //if date is not valid (e.g Feb 30th)

            this.updateConstellation(constellation);

            this.setState({starSign:""});

        }
        
        }

      }
    }

    getRandomStatement(){


        var starSigns = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
        
        var starSignNumber = starSigns.indexOf(this.state.starSign);

        var oneDayInMs = 1000*60*60*24;
        var currentTimeInMs = new Date().getTime();  // UTC time
        var timeInDays = Math.abs(Math.floor((currentTimeInMs*(starSignNumber+1)) / oneDayInMs));
        var randomNumber = timeInDays % 9999;
        //unique random daily number per star sign
        
        var randomNumberString = randomNumber.toString();

        while(randomNumberString.length < 4)
        {
            randomNumberString += randomNumberString[0]; //minimum of 4 characters
        }

        var digitArray = [0,0,0,0];

        for(var i = 0; i < randomNumberString.length; i++)
        {
            digitArray[i] = Number.parseInt(randomNumberString[i]);
        }


        var firstWord = ["You", "A loved one", "An enemy", "Someone you're close to", "A family pet", "A family member", "A friend", "An old teacher", "Your car", "Your best friend"];
        var secondWord = ["will", "might", "at midnight will", "could", "may", "will potentially", "will definitely", "possibly could", "later today will", "tonight will"];
        var thirdWord = ["eat","drop","lose","fight","swallow","hide","mess with","chew on", "walk on", "be squished by"];
        var fourthWord = ["a car", "some olive oil", "a potato", "countless potatoes", "some nice steak", "a really long piece of spaghetti", "their left foot", "their tongue", 
        "an existential crisis", "absolutely nothing. Astrology doesn't exist."];


        var newReading = firstWord[digitArray[0]] + " " + secondWord[digitArray[1]] + " " + thirdWord[digitArray[2]] + " " + fourthWord[digitArray[3]];

        this.setState({reading:newReading});

    }
    
    updateConstellation(constellation_img){
        
        var continueElement = document.getElementById("continue");
        var constellationElement = document.getElementById("constellation");

        if(constellation_img === constellation)
        {
            constellationElement.className = "constellation_fade";
            continueElement.className = "arrow_hide";
            setTimeout(function(){
                constellationElement.src = constellation_img;
                continueElement.className="arrow_hidden";
            },1000);

        }
        else{

        constellationElement.className = "constellation_fade";
        setTimeout(function(){
            continueElement.className = "arrow";
            constellationElement.className="constellation";
            constellationElement.src = constellation_img;
            

    },2000);

}

    }

    render() {

        return (
            
    <div id="fullDOB" className="fullDOB">
    
    <div>
    <img id="constellation_background" className="constellation_background" src={constellation} alt=""></img>
    <img id="constellation" className="constellation" src={constellation} alt=""></img>
    </div>
    <div id="dob" className="dob_hidden">
    <div className="form">
            <label>My date of birth is the<br/> </label>

    <select id="date" name="day" className="DOBDay" value={this.state.value} onChange={this.handleChange}>
    <option value="">_</option>                 
    <option value="1">1st</option>
    <option value="2">2nd</option>
    <option value="3">3rd</option>
    <option value="4">4th</option>
    <option value="5">5th</option>
    <option value="6">6th</option>
    <option value="7">7th</option>
    <option value="8">8th</option>
    <option value="9">9th</option>
    <option value="10">10th</option>
    <option value="11">11th</option>
    <option value="12">12th</option>
    <option value="13">13th</option>
    <option value="14">14th</option>
    <option value="15">15th</option>
    <option value="16">16th</option>
    <option value="17">17th</option>
    <option value="18">18th</option>
    <option value="19">19th</option>
    <option value="20">20th</option>
    <option value="21">21st</option>
    <option value="22">22nd</option>
    <option value="23">23rd</option>
    <option value="24">24th</option>
    <option value="25">25th</option>
    <option value="26">26th</option>
    <option value="27">27th</option>
    <option value="28">28th</option>
    <option value="29">29th</option>
    <option value="30">30th</option>
    <option value="31">31st</option>
</select>
<label>of </label>
<select id="month" name="month" className="DOBMonth" value={this.state.value} onChange={this.handleChange}>
    <option value="">_</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
</select>


<br></br>

<img id="continue" className="arrow_hidden" src={arrows} alt="Continue.." onClick={this.handleContinue}></img>
</div>

</div>
<div className="result_hidden" id="result">
<label>The {this.state.starSign} reading for today is..</label>
<label>{this.state.reading}</label>
<img  className="back" src={arrows} alt="back.." onClick={this.handleBack}></img>
</div>
</div>
)}
}
