package at.jeff.project.payload;

import at.jeff.project.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private boolean success;
    private String message;
    private String token;
    private String userId;

}
