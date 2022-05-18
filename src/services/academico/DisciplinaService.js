class DisciplinaService {
    getAll(){
        const disciplinas = localStorage.getItem('disciplinas')
        return disciplinas ? JSON.parse(disciplinas) : []
    }

    get(id){

    }

    create(dados){
        const disciplinas = this.getAll()
        disciplinas.push(dados)
        localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    }

    update(id, dados){

    }

    delete(id){
        const disciplinas = this.getAll()
        disciplinas.splice(id, 1)
        localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    }
}

export default new DisciplinaService()