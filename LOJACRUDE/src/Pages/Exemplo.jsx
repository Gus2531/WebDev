import React from "react";

function Exemplo() {
    return (
        <div className="mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
            <img
                src="https://www.kacewear.com.br/cdn/shop/files/Camiseta_Slim_Bsica_Algodao_Egipcio_Preta_Kace_Masculino_Detalhe.jpg?v=1724536336&width=939"
                style={{ width: '30%', height: 'auto' }}
                alt="Camiseta-Slim-Kace"
            />

            <div style={{ marginLeft: '5rem' }}>
                <h1>Camiseta Slim Lisa Preta Kace</h1>
                <h3 className="mt-3">R$149,90</h3>
                <h4 className="mt-5 mb-4">Selecione um tamanho:</h4>
                <div className="d-flex gap-5">
                    <button className="btn btn-secondary btn-lg">P</button>
                    <button className="btn btn-secondary btn-lg">M</button>
                    <button className="btn btn-secondary btn-lg">G</button>
                    <button className="btn btn-secondary btn-lg">GG</button>
                </div>
                <div className="mt-5">
                    <button className="btn btn-dark btn-lg">Adicionar ao Carrinho</button>
                 </div>
             </div>
            </div>
        
    );
}

export default Exemplo;