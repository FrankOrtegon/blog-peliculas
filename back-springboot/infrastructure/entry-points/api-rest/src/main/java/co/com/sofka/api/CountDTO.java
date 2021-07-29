package co.com.sofka.api;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.count.values.Name;
import co.com.sofka.model.count.values.Phone;
import co.com.sofka.model.count.values.Plan;

public class CountDTO {
    private IdCount idCount;
    private Name name;
    private Phone phone;
    private Plan plan;

    public CountDTO() {

    }

    public CountDTO(IdCount idCount, Name name, Phone phone, Plan plan) {
        this.idCount = idCount;
        this.name = name;
        this.phone = phone;
        this.plan = plan;
    }

    public IdCount getIdCount() {
        return idCount;
    }

    public void setIdCount(IdCount idCount) {
        this.idCount = idCount;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public Phone getPhone() {
        return phone;
    }

    public void setPhone(Phone phone) {
        this.phone = phone;
    }

    public Plan getPlan() {
        return plan;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }
}
