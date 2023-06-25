import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';


class UsersType extends Model<InferAttributes<UsersType>, InferCreationAttributes<UsersType>> {
    declare id: string;
    declare name:string;
}

export default function usersType (sequelize: Sequelize) {

    UsersType.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            paranoid: true,
            timestamps: false
        }
    );
    return UsersType;

};