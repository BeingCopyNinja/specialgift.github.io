document.getElementById('surprise-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    const scareElement = document.getElementById('scare');
    scareElement.classList.remove('hidden');

    // Play audio
    const audio = document.getElementById('scare-audio');
    audio.play();
});
