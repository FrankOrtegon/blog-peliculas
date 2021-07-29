package co.com.sofka.model.count.values;

public class Plan {
    private final Boolean plan;

    public Plan(Boolean plan) {
        this.plan = plan;
    }

    public static Plan of(Boolean plan){
        return new Plan(plan);
    }

    public Boolean getPlan(){
        return plan;
    }
}
