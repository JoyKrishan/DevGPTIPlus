        return filter(player -> actor.equals(player.getInteracting()));
        return filter(player -> methods.players.getMyPlayer().getAccessor().equals(player.getInteracting()));
        return filter(player -> !methods.players.getMyPlayer().getAccessor().equals(player.getInteracting()));