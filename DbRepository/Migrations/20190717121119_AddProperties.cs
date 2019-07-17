using Microsoft.EntityFrameworkCore.Migrations;

namespace DbRepository.Migrations
{
    public partial class AddProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Money",
                table: "Players",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Position",
                table: "Players",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Money",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Position",
                table: "Players");
        }
    }
}
