export class LocalStorageManagement
{
    static setEndGameData()
    {
        var now = new Date();
        var midnight = new Date();

        midnight.setHours(0, 0, 0, 0);

        var timeStamp = midnight.getTime() + 86400000 - now.getTime();

        var endGameData = {
            endGame: (this.getEndGameData() != null) ? this.getEndGameData().endGame + 1 : 1,
            timeStamp: timeStamp + now.getTime()
        }

        localStorage.setItem("endGameData", JSON.stringify(endGameData));
    }


    static getEndGameData()
    {
        return JSON.parse(localStorage.getItem("endGameData"));
    }


    static resetEndGameDataAtMidnight()
    {
        // It means that there are chances available yet
        var nowInMs = new Date().getTime();
        var timeStamp = this.getEndGameData().timeStamp;

        if (nowInMs >= timeStamp)
        {
            // It means that the timeStamp has expired and the data can be deleted
            localStorage.clear();
            window.location.reload();
        }
    }
}