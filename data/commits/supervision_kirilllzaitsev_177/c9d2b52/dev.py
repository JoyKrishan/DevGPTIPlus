        # TODO: replace seaborn with matplotlib
        import seaborn as sn

        rcParams["font.family"] = "sans-serif"
        rcParams["font.sans-serif"] = ["Verdana"]
            array = array / (array.sum(0).reshape(1, self.num_classes + 1) + 1e-8)