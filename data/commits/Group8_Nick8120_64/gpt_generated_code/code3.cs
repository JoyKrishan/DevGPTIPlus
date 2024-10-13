   public void RangedAttack()
   {
       if (AttackSound.Count > 0)
       {
           AudioSource.PlayClipAtPoint(AttackSound.Random(), transform.position);
       }

       var bullet = Instantiate(Bullet);

       // ... (code for determining bullet direction and position)

       bullet.GetComponent<Bullet>().Damage = Random.Range(1, 5);

       _lastShot = Time.fixedTime;
       _ammo.RemoveAmmo(AmmoType.Solution, 1);
   }