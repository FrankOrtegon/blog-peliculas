package co.com.sofka.model.count.values;

public class UrlPhoto {

    private final String url;

    public UrlPhoto(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public static UrlPhoto of(String url){
        return new UrlPhoto(url);
    }
}
