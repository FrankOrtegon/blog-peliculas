package co.com.sofka.api;

import co.com.sofka.model.count.Count;
import org.springframework.stereotype.Component;

@Component
public class CountMapper {

    public Count fromModel(CountDTO countDTO){
        Count count = new Count();
        count.setIdCount(countDTO.getIdCount());
        count.setName(countDTO.getName());
        count.setPhone(countDTO.getPhone());
        count.setPlan(countDTO.getPlan());
        return count;
    }

    public CountDTO fromDTO(Count count){
        CountDTO countDTO = new CountDTO();
        countDTO.setIdCount(count.getIdCount());
        countDTO.setName(count.getName());
        countDTO.setPhone(count.getPhone());
        countDTO.setPlan(count.getPlan());
        return countDTO;
    }

}
