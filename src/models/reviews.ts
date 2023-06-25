import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';


class Reviews extends Model<InferAttributes<Reviews>, InferCreationAttributes<Reviews>> {
    declare id: string;
    declare review: string;
    declare totalScore: string;
}

export default function reviews (sequelize: Sequelize) {

    Reviews.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            review: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            totalScore: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            paranoid: true,
            timestamps: false
        }
    );
    return Reviews;

};