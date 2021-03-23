Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png ',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capturing() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
        console.log('hi ');

    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/fau1-U3OD/model.json', modelworking);

function modelworking() {
    console.log('working');
}

function Identyfing() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("Name_object").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}