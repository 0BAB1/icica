import QandA from './QandA';

function Tutorial() {
    return (
        <div className='Tutorial'>
            <QandA
                question={"Comment ça marche ?"}
                answer={"Vous entrez un mot de 3 caractères de l'alphabet sans aucune ponctution autorisée. Chaque combinaison de caractère est donc unique et transférée sur la blockchain puis vous est attribué en tant que NFT."}
            />
        </div>
    );
}

export default Tutorial;
