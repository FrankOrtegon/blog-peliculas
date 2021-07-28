package co.com.sofka.model.count.gateways;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.values.IdCount;

public interface CountRepository {
    Count addCount(Count count);
    Count updateCount(Count count);
    Count getCount(IdCount idCount);
}
