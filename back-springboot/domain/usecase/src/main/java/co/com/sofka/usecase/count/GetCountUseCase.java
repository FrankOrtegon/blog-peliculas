package co.com.sofka.usecase.count;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.model.count.values.IdCount;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class GetCountUseCase {
    private final CountRepository countRepository;
    public Count getCount(String idCount) {
        return countRepository.getCount(idCount);
    }
}
