function launchMissile(missle) {
    console.log('🚀 ~ launchMissile ~ missle ➔', missle);
}
function launchAll(launchMissile) {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            launchMissile(i);
        }, i * 1000);
    }
}

launchAll(launchMissile);
