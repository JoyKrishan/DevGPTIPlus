def complement(input_string):
    return input_string.translate(str.maketrans("ATCG", "TAGC"))
    start: int  # zero-indexed
    end: int  # 0-indexed


from dataclasses import dataclass


@dataclass(eq=False)
class Codon:
    gene: Gene
    codon_number: int  # zero-indexed
    positions: dict  # zero-indexed positions e.g. {0:123,1:124,2:125}
    strand: int

    def __eq__(self, other):
        if isinstance(other, Codon):
            return self.gene == other.gene and self.codon_number == other.codon_number
        return False

    def __hash__(self):
        return hash((self.gene, self.codon_number))

                  nuc_to_codon,
    by_codon = defaultdict(list)
        zero_indexed_pos = mutation.one_indexed_position - 1
        if zero_indexed_pos in nuc_to_codon:
            for codon in nuc_to_codon[zero_indexed_pos]:
                by_codon[codon].append(mutation)
    for gene_codon, mutations in by_codon.items():

        # are actually collecting the complement of the codon

        initial_codon = [seq[gene_codon.positions[x]] for x in range(3)]
                              for x in gene_codon.positions.values()
        flipped_dict = {
            position: offset
            for offset, position in gene_codon.positions.items()
        }
            initial_codon[flipped_dict[position]] = value
            pos_in_codon = flipped_dict[mutation.one_indexed_position - 1]
            final_codon[pos_in_codon] = mutation.mut_nuc
        if gene_codon.strand == -1:

            initial_codon = complement(initial_codon)
            final_codon = complement(final_codon)
                AAMutation(gene=gene_codon.gene,
                           one_indexed_codon=gene_codon.codon_number + 1,
                           nuc_for_codon=gene_codon.positions[1]))
    for mutation in new_nuc_mutations_here:
        past_nuc_muts_dict[mutation.one_indexed_position -
                           1] = mutation.mut_nuc
def recursive_mutation_analysis(node, past_nuc_muts_dict, seq, cdses, pbar,
                                nuc_to_codon):
                                 new_nuc_mutations_here, seq, nuc_to_codon)
                                    pbar, nuc_to_codon)
                                        pbar, self.nuc_to_codon)
        self.genes = get_genes_dict(self.cdses)
        by_everything = defaultdict(lambda: defaultdict(dict))
        total_lengths = {}
        for feature in self.cdses:

            gene_name = get_gene_name(feature)

            nucleotide_counter = 0
            for part in feature.location.parts:
                ranger = range(
                    part.start, part.end
                ) if part.strand == 1 else range(
                    part.end - 1, part.start - 1, -1
                )  #(honestly not sure why we need to subtract 1 here but we seem to?)

                for genome_position in ranger:

                    cur_codon_number = nucleotide_counter // 3
                    cur_pos_in_codon = nucleotide_counter % 3

                    by_everything[gene_name][cur_codon_number][
                        cur_pos_in_codon] = genome_position
                    nucleotide_counter += 1
            total_lengths[gene_name] = nucleotide_counter

        nuc_to_codon = defaultdict(list)

        for feat_name, codons in by_everything.items():
            for codon_index, codon_dict in codons.items():
                codon_obj = Codon(feat_name, codon_index, codon_dict,
                                  self.genes[feat_name].strand)

                assert len(codon_dict) % 3 == 0
                for k, v in codon_dict.items():
                    nuc_to_codon[v].append(codon_obj)

        self.nuc_to_codon = nuc_to_codon