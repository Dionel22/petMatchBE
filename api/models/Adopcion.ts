import {
    DataTypes,
    Model,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
  } from "sequelize";
  
  export class Adopcions extends Model<
    InferAttributes<Adopcions>,
    InferCreationAttributes<Adopcions>
  > {
    declare id: string;
    declare name: string;
    declare lastName: string;
    declare email: string;
    declare address: string;
    declare phone: number;
    declare economicSituation: string;
    declare previousPetExperience: string;
    declare petAllergy: string;
    declare properHome: boolean;
    declare dailyPetTime: string;
    declare over18: boolean;
    declare adopcionId: string;
  }
  
  export default function adopcionModel(sequelize: Sequelize) {
    Adopcions.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        economicSituation: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        previousPetExperience: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        petAllergy: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        properHome: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        dailyPetTime: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        over18: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        adopcionId: {
          type: DataTypes.UUID, 
          allowNull: true, // Opcional: Define si la columna permite valores nulos
        },
      },
      {
        sequelize,
        modelName: 'Adopcions', // Nombre del modelo en singular
        tableName: 'Adopcions', // Nombre de la tabla en plural
    
        paranoid: true,
      }
    );
    return Adopcions;
  }