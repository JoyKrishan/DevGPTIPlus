        current_scope = unit->m_symtab;
            ASR::symbol_t *f_sym = unit->m_symtab->get_symbol(func_name);
                unit->m_symtab->erase_symbol(func_name);
            ASR::symbol_t *f_sym = unit->m_symtab->get_symbol(func_name);
                unit->m_symtab->erase_symbol(func_name);
        SymbolTable *program_scope = al.make_new<SymbolTable>(tu->m_symtab);
        ASR::symbol_t *mod_sym = tu->m_symtab->resolve_symbol(mod_name);
        tu->m_symtab->add_symbol(prog_name, ASR::down_cast<ASR::symbol_t>(prog));