import QandA from './QandA';

function Tutorial() {
    return (
        <div className='tuto-flex'>
            <div className='tuto-wrapper'>
                <h1 className='tuto-title'>Comment ça marche ?</h1>
                <div className='Tutorial'>
                    <QandA
                        question={"🤔 Comment ça marche ?"}
                        answer={"🚀 Vous entrez un mot de 5 caractères max.🤖 Le moteur graphique d'une complexité hors du commun vous génère une image personalisée qui vous ressemble 😊"}
                    />
                    <QandA
                        question={"💡Pourquoi utiliser icica ?"}
                        answer={"parceque. 🤓"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
