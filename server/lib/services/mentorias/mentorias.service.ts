import { BaseService } from '../base.service';
import { Usuario } from '../../models/usuarios/usuarios.model';

export class MentoriasServices extends BaseService<Usuario>{
    constructor(
        private readonly _userModel = new Usuario().getModelForClass(Usuario)
    ) {
        super();
        this._model = this._userModel;
    }

    async ativarMentoria(userId: string){
        const usuario:Usuario = await this.findById(userId);

        usuario.mentor = true;

        return await this.update(userId, usuario);
    }

    async ativarQueroSerMentor(userId: string){
        const usuario:Usuario = await this.findById(userId);

        usuario.queroMentor = true;

        return await this.update(userId, usuario);
    }

    async getMentores(){
        return await this.findAll({mentor:true});
    }

    async getQueroMentor(){
        return await this.findAll({queroMentor: true});
    }


}