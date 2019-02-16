import { BaseService } from '../base.service';
import { Usuario } from '../../models/usuarios/usuarios.model';

export class ParceriasService extends BaseService<Usuario>{
    constructor(
        private readonly _userModel = new Usuario().getModelForClass(Usuario)
    ) {
        super();
        this._model = this._userModel;
    }

    async ativarParceria(userId: string){
        const usuario:Usuario = await this.findById(userId);

        usuario.parceria = true;

        return await this.update(userId, usuario);

    }

    async getParceiros(){
        return await this.findAll({parceria:true});
    }

    
}