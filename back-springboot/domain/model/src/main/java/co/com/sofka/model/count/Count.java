package co.com.sofka.model.count;
import co.com.sofka.model.count.values.Phone;
import co.com.sofka.model.count.values.Name;
import co.com.sofka.model.count.values.Plan;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Count {

    private String idCount;
    private Name name;
    private Phone phone;
    private Plan plan;

    public Count() {
    }

    public Count(String idCount, Name name, Phone phone, Plan plan) {
        this.idCount = idCount;
        this.name = name;
        this.phone = phone;
        this.plan = plan;
    }
}
