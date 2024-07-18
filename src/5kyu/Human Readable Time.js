function humanReadable(seconds) {
    const secs = new Date(seconds * 1000).getSeconds();
    const mins = new Date(seconds * 1000).getMinutes();
    const hours = Math.floor(seconds / 3600);

    function setTwoSymbols(data) {
        return data < 10 ? '0' + data : data;
    }
    return `${setTwoSymbols(hours)}:${setTwoSymbols(mins)}:${setTwoSymbols(secs)}`;
}

humanReadable(0); //  '00:00:00');
humanReadable(59); //  '00:00:59');
humanReadable(60); //  '00:01:00');
humanReadable(90); //  '00:01:30');
humanReadable(3599); //  '00:59:59');
humanReadable(3600); //  '01:00:00');
humanReadable(45296); //  '12:34:56');
humanReadable(86399); //  '23:59:59');
humanReadable(86400); //  '24:00:00');
humanReadable(359999); //  '99:59:59');
