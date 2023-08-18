const ModelGames = require('../models/games');

module.exports = 
{
    async All(req,res)
    {
        try{
            const id = req.query.id;

            let condition = id ? {id: {[Op.like]: `%${id}%` } } : null
        
            const games = await ModelGames.findAll({where : condition});
            return res.json(games);
        } catch (erro) 
        {
            const err = 'internal error 500 '
            return console.error(`An error occurred while searching for games ${err}`, erro);
        }
        
    },

    async Create(req,res)
    {
        try{
            const games = await ModelGames.create(
                {
                    id : req.body.id,
                    title : req.body.title,
                    description : req.body.description,
                    numberPlayers : req.body.numberPlayers,
                    recommendedAge : req.body.recommendedAge,
                    creationDate : req.body.creationDate,
                    updateDate : null

                }
            
            );

            return res.json(games);
        } catch (erro){
            const err = 'internal error 500 '
            return console.error(`An error occurred while creating the game ${err}`, erro);
        }

    },
    async Update(req,res)
    {
        try{

            const game = await ModelGames.findByPk(req.body.id);
            if(game){
                game.description = req.body.description;
                game.updateDate = new Date();
                await game.save();
            }

            return res.json(game);

        } catch (erro){
            const err = 'internal error 500 '
            return console.error(`An error occurred while updating the game ${err}`, erro);
        }
    },
    async FindOne(req,res)
    {
        try{
            const game = await ModelGames.findByPk(req.body.id);

            return res.json(game);
        } catch(erro){
            const err = 'internal error 500 '
            return console.error(`An error occurred while searching for the game ${err}`, erro);
        }
    },
    async Delete(req,res)
    { 
        try{
            const game = await ModelGames.findByPk(req.body.id);
            await game.destroy(game);
            return res.json(game);

        } catch(erro){
            const err = 'internal error 500 '
            return console.error(`an error occurred when deleting the game ${err}`, erro);
        }
    }
}