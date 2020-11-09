// Fetch all Customers
var competencias = [
	{
		cod: "C.1.1",
		descricao: "Identificar problemas que tenham solução algorítmica(CG-I)",
		classificacao: "Avaliar",
		conteudo: ["Algoritmos","Metodologia Ciêntífica","Lógica Matemática","Matemática Discreta"]
	},
	{
		cod: "C.1.2",
		descricao: "Identificar problemas que tenham solução algorítmica(CG-I)",
		classificacao: "Avaliar",
		conteudo: ["Complexidade de Algoritmos","Teoria da Computação"]
	},
	{
		cod: "C.1.3",
		descricao: "esolver problemas usando ambientes de programação (CG-III)",
		classificacao: "Criar",
		conteudo: ["Algoritmos", "Técnicas de Programação", "Estruturas de Dados", "Padrões de Projetos","Teoria dos Grafos","Compiladores","Inglês Instrumental","Lógica Matemática"]
	},
	{
		cod: "C.1.4",
		descricao: "Compreender e explicar as dimensões quantitativas de um problema (CG-V)",
		classificacao: "Aplicar",
		conteudo: "Matemática Discreta"
	},	
	{
		cod: "C.1.5",
		descricao: "Reconhecer a importância do pensamento computacional no cotidiano e sua aplicação em circunstâncias apropriadas e em domínios diversos (CE-II)",
		classificacao: "Aplicar",
		conteudo: "Empreendedorismo"
	}]

exports.getAll = (req, res) => {
	console.log("Competencias: \n" + JSON.stringify(competencias, null, 4));
	res.send(competencias);
};