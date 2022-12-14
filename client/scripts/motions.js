//Motions
const Motions = {
    Extend: "Extend Current Motion",
    Voting: "Voting Procedure",
    Introduce: "Introduce Directives",
    Unmod: "Unmoderated Caucus",
    StrawPoll: "Straw Poll",
    RoundRobin: "Round Robin",
    Mod: "Moderated Caucus",
}

const Vote = {
    NA: "NA",
    Passed: "Passed",
    Failed: "Failed"
}

class Motion {
    constructor(type, rank) {
        this.type = type;
        this.rank = rank;
        this.status = Vote.NA;
    }

    pass() {
        this.status = Vote.Passed;
    }

    fail() {
        this.status = Vote.Failed;
    }

    reset() {
        this.status = Vote.NA;
    }
}

class Extend extends Motion {
    constructor() {
        super(Motions.Extend, 0);
    }
}

class Voting extends Motion {
    constructor(speakers, speakingTime) {
        super(Motions.Voting, 1);
        this.speakers = speakers;
        this.speakingTime = speakingTime;
    }
}

class Introduce extends Motion {
    constructor() {
        super(Motions.Introduce, 2);
    }
}

class Unmod extends Motion {
    constructor(min, sec) {
        super(Motions.Unmod, 3);
        this.min = min;
        this.sec = sec;
    }
}

class StrawPoll extends Motion {
    constructor() {
        super(Motions.StrawPoll, 4)
    }
}

class RoundRobin extends Motion {
    constructor() {
        super(Motions.RoundRobin, 4.5);
    }
}

class Mod extends Motion {
    constructor(min, speakingTime) {
        super(Motions.Mod, 5);
        this.min = min;
        this.speakingTime = speakingTime;
    }
}