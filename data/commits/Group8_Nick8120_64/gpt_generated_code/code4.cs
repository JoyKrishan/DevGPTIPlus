   private bool CanFire()
   {
       var ammunitionIsNotEmpty = (AmmunitionType == AmmoType.Infinite || _ammo.HasAmmo(AmmunitionType, 1));
       var itHasBeenLongEnoughSinceTheLastShot = Time.fixedTime - _lastShot > ShotDelay;

       return ammunitionIsNotEmpty && itHasBeenLongEnoughSinceTheLastShot;
   }