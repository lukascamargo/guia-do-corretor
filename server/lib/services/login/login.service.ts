import { BaseService } from '../base.service';
import { Usuario } from '../../models/usuarios/usuarios.model';
import { LoginVm } from '../../models/usuarios/login-vm.model';

export class LoginService extends BaseService<Usuario> {

    constructor(
        private readonly _userModel = new Usuario().getModelForClass(Usuario)
    ) {
        super();
        this._model = this._userModel;
    }


    async login(loginVm: LoginVm){
        const {email, senha} = loginVm;
        const usuario = this.findOne({email, senha});

        if(!usuario) {
            return {message: 'Usuário não encontrado'}
        } else {
            return usuario;
        }
    }

}