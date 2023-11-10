package Ctvmz11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ctvmz11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Датчик
 */
@Entity(name = "IISCtvmz11Датчик")
@Table(schema = "public", name = "Датчик")
public class Datchik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Погрешность")
    private Double погрешность;

    @Column(name = "Производ")
    private String производ;

    @Column(name = "id")
    private Integer id;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontroller")
    @Convert("Kontroller")
    @Column(name = "Контроллер", length = 16, unique = true, nullable = false)
    private UUID _kontrollerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontroller", insertable = false, updatable = false)
    private Kontroller kontroller;


    public Datchik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getПогрешность() {
      return погрешность;
    }

    public void setПогрешность(Double погрешность) {
      this.погрешность = погрешность;
    }

    public String getПроизвод() {
      return производ;
    }

    public void setПроизвод(String производ) {
      this.производ = производ;
    }

    public Integer getid() {
      return id;
    }

    public void setid(Integer id) {
      this.id = id;
    }


}