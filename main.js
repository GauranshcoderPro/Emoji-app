Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality: 90
})

document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YBo91d5Lh/model.json',modelLoaded);

function modelLoaded(){
    console.log('model Is Ready')
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction of your current emotion judged by your face is "+prediction_1;
    speak_data_2 = "The second prediction of your current emotion judged by your face is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;

        if(results[0].label == "happy"){
            document.getElementById("update_emoji").innerHTML = "&#128512;";
        }

        if(results[0].label == "sad"){
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }

        if(results[0].label == "angry"){
            document.getElementById("update_emoji").innerHTML = "&#128545;";
        }
        
        if(results[0].label == "scared"){
            document.getElementById("update_emoji").innerHTML = "&#128552;";
        }

        if(results[0].label == "superised"){
            document.getElementById("update_emoji").innerHTML = "&#128562;";
        }

        if(results[1].label == "happy"){
            document.getElementById("update_emoji2").innerHTML = "&#128512;";
        }

        if(results[1].label == "sad"){
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }

        if(results[1].label == "angry"){
            document.getElementById("update_emoji2").innerHTML = "&#128545;";
        }
        
        if(results[1].label == "scared"){
            document.getElementById("update_emoji2").innerHTML = "&#128552;";
        }

        if(results[1].label == "superised"){
            document.getElementById("update_emoji2").innerHTML = "&#128562;";
        }

    }
}