import { BaseService } from '../base.service';
import { Usuario } from '../../models/usuarios/usuarios.model';

export class CadastroService extends BaseService<Usuario> {

    constructor(
        private readonly _userModel = new Usuario().getModelForClass(Usuario)
    ) {
        super();
        this._model = this._userModel;
    }

    async manterUsuario(usuarioVm: Usuario){
        console.log(usuarioVm);
        const novoUser = new this._model();

        novoUser._id = usuarioVm._id;
        novoUser.nome = usuarioVm.nome;
        novoUser.email = usuarioVm.email;
        novoUser.senha = usuarioVm.senha;
        novoUser.mentor =usuarioVm.mentor;
        novoUser.queroMentor = usuarioVm.queroMentor;
        novoUser.parceria = usuarioVm.parceria;
        novoUser.criado = usuarioVm.criado;
        novoUser.atualizado = usuarioVm.atualizado;

        return await this.update(novoUser._id, novoUser);
    }
    

}