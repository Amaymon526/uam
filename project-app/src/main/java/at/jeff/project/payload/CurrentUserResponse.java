package at.jeff.project.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CurrentUserResponse {
    private String userId;
    private String username;
}