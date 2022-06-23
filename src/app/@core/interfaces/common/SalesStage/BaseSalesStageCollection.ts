import { SalesStage } from './SalesStage';


export class BaseSalesStageCollection {

    protected checkAndSetFutureStages(currentStage: SalesStage, futureStage: SalesStage) {
        if (currentStage.date == null) {
            return;
        }

        if (futureStage.date < currentStage.date) {
            futureStage.date = null;
        }
    }

    protected checkAndSetPastStages(currentStage: SalesStage, pastStage: SalesStage) {
        if (currentStage.date == null) {
            return;
        }

        if (pastStage.date == null || pastStage.date > currentStage.date) {
            pastStage.date = currentStage.date;
        }
    }
}
