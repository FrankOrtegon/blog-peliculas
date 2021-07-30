package co.com.sofka.api.count;

import co.com.sofka.model.count.values.Name;
import co.com.sofka.model.count.values.Phone;
import co.com.sofka.model.count.values.Plan;

public class CountDTO {
    private String idCount;
    private Name name;
    private Phone phone;
    private Plan plan;

    public CountDTO() {

    }

    public CountDTO(String idCount, Name name, Phone phone, Plan plan) {
        this.idCount = idCount;
        this.name = name;
        this.phone = phone;
        this.plan = plan;
    }

    public String getIdCount() {
        return idCount;
    }

    public void setIdCount(String idCount) {
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
