import ClientModel from "../models/ClientModel";
import Client from "../DTO/Client";
import ClientFilter from "../DTO/ClientFilter";
import bcrypt from 'bcrypt'
import ClientCreate from "../DTO/ClientCreate";
import ClientUpdate from "../DTO/ClientUpdate";
import { FileService } from "../../../middlewares/FileService";

const getListClientHandler = async (input: ClientFilter) => {
    return await ClientModel.find(input).select(['-Password']).populate('LastWatchMovie').populate('MovieList').populate('Bundle')
}

const getClientByIdHandler = async (input: string) => {
    return await ClientModel.findById(input).select(['-Password']).populate('LastWatchMovie').populate('MovieList').populate('Bundle')
}

const createClientHandler = async (input: ClientCreate, file: any) => {
    if (file) {
        const _fileService = new FileService();
        const filePath = await _fileService.createFile(file)
        input.Avatar = filePath
    }

    const { Email, Password, UserName } = input
    let client: any = await ClientModel.findOne({ Email })
    if (client) {
        return {
            isSuccess: false,
            msgString: "Email already exist"
        }
    }
    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    await ClientModel.create(input)
    return {
        isSuccess: true,
        msgString: "Create Success"
    }
}

const updateClientHandler = async (ClientId: String, input: ClientUpdate, file: any) => {
    if (file) {
        const _fileService = new FileService();
        const filePath = await _fileService.createFile(file)
        input.Avatar = filePath
    }
    if (input.LastWatchMovieString) {
        input.LastWatchMovie = input.LastWatchMovieString.split(',')
    }
    return await ClientModel.updateOne({ _id: ClientId }, { $set: input })
}

const deleteClientHandler = async (input: string) => {
    return await ClientModel.deleteOne({ _id: input })
}

const changeAvatarHandler = async (input: ClientUpdate, file: any) => {
    // input.Avatar = file ? `src/public/ClientAvatar/${file.filename}` : null
    // return await ClientModel.updateOne({ _id: input.Id }, { $set: input })
}

const checkPasswordClientHandler = async (Id: string, Password: string) => {
    let client = await ClientModel.findById(Id)
    if (!client) {
        return {
            isSuccess: false,
            msgString: "Not exist Client"
        }
    }
    const isPasswordValid: boolean = await bcrypt.compare(Password, client.Password);
    if (!isPasswordValid) {
        return {
            isSuccess: false,
            msgString: "Wrong password"
        }
    }

    return {
        isSucces: true,
        data: client
    }
}
export {
    getListClientHandler,
    getClientByIdHandler,
    createClientHandler,
    updateClientHandler,
    deleteClientHandler,
    changeAvatarHandler,
    checkPasswordClientHandler
}