const btnLogin = document.getElementById('processImage');
const btnCapture = document.getElementById('capture');
const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
let videoTracks;

//GUARDAR ISSO
const subscriptionKey = "a76225be0539425da6665eeb02a8973f";

btnLogin.addEventListener("click", function() {
	firebase.firestore().collection('users').get().then(snap => snap.forEach(i => console.log(i.data().img.path)));
})

/* fluxo de captura da imagem */

btnCapture.addEventListener("click", function () {
	const context = snapshot.getContext('2d');
	// Draw the video frame to the canvas.
	context.drawImage(player, 0, 0, snapshotCanvas.width,
		snapshotCanvas.height)

	const canvas = snapshotCanvas.toDataURL('image/jpeg');

	const fbStorage = firebase.storage().ref();
	const child = fbStorage.child('users/'+Math.random()+'.png')
	// console.log(canvas)
	const img = canvas.replace('data:image/jpeg;base64,/', '')

	// console.log(canvas)
	child.putString(canvas, 'data_url').then(snap => console.log('funcionou'))
	
	//videoTracks.forEach(function(track) {track.stop()});


});

const handleSuccess = function (stream) {
	player.srcObject = stream;
	videoTracks = stream.getVideoTracks();
};

navigator.mediaDevices.getUserMedia({ video: true })
	.then(handleSuccess);


const addToFirebase = () => {
	console.log('deu certo!')
}

/* function processImage() {
  // Replace <Subscription Key> with your valid subscription key.
    var subscriptionKey = "a76225be0539425da6665eeb02a8973f";

    var uriBase =
    "https://laboratoriaface.cognitiveservices.azure.com/face/v1.0/detect";

    // Request parameters.
    var params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes":
    "age,gender,headPose,smile,facialHair,glasses,emotion," +
    "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };

    // Display the image.
    var sourceImageUrl = document.getElementById("inputImage").value;
    document.querySelector("#sourceImage").src = sourceImageUrl;

    // Perform the REST API call.
    $.ajax({
    url: uriBase + "?" + $.param(params),

    // Request headers.
    beforeSend: function (xhrObj) {
    xhrObj.setRequestHeader("Content-Type", "application/json");
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    },

    type: "POST",

    // Request body.
    data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function (data) {
    // Show formatted JSON on webpage.
    $("#responseTextArea").val(JSON.stringify(data, null, 2));
    })

    .fail(function (jqXHR, textStatus, errorThrown) {
    // Display error message.
    var errorString = (errorThrown === "") ?
    "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    errorString += (jqXHR.responseText === "") ?
    "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
    jQuery.parseJSON(jqXHR.responseText).message :
    jQuery.parseJSON(jqXHR.responseText).error.message;
    alert(errorString);
    });
    }; */


