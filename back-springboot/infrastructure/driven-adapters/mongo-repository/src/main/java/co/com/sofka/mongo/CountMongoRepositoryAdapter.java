package co.com.sofka.mongo;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.mongo.entity.CountEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class CountMongoRepositoryAdapter extends AdapterOperations<CountEntity, CountEntity, String, CountMongoDBRepository>
implements CountRepository {

    public CountMongoRepositoryAdapter(CountMongoDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper,  d -> mapper.map(d, CountEntity.class));
    }

    @Override
    public Count addCount(Count count) {
        CountEntity countEntity = new CountEntity(
                count.getIdCount(),
                count.getName(),
                count.getPhone(),
                count.getPlan()
        );
        this.repository.save(countEntity);
        return count;
    }

    @Override
    public Count updateCount(Count count) {
        CountEntity countEntity = new CountEntity();

        countEntity.setIdCount(count.getIdCount());
        countEntity.setName(count.getName());
        countEntity.setPhone(count.getPhone());
        countEntity.setPlan(count.getPlan());

        this.repository.save(countEntity);
        return count;
    }

    @Override
    public Count getCount(IdCount idCount) {
        Optional<CountEntity> countEntity = this.repository.findById(idCount.getIdCount());
        Count count = new Count();
        count.setIdCount(countEntity.get().getIdCount());
        count.setName(countEntity.get().getName());
        count.setPhone(countEntity.get().getPhone());
        count.setPlan(countEntity.get().getPlan());

        return count;
    }

}
