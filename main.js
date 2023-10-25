
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qx4Tos2y9/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}